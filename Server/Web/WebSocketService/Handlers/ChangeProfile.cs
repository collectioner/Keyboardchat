using KeyBoardChat.DataBase;
using KeyBoardChat.DataBase.Models;
using KeyBoardChat.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace KeyBoardChat.Web.WebSocketService.Handlers
{
    public class ChangeProfileHandler : WebSocketServiceHandler
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("avatar")]
        public string Avatar { get; set; }

        private object locker = new object();

        public override IEnumerable<HandlerCallBack> Handle(Connection connection)
        {
            var outcallback = new List<HandlerCallBack>();

            byte[] bytes;

            ((Action)(() =>
            {
                try
                {
                    bytes = Convert.FromBase64String(Avatar);
                }
                catch (FormatException)
                {
                    outcallback.Add(new HandlerCallBack(data: "invalidData", error: true));
                    return;
                }

                var user = connection.Session.User;


                using (var dbcontext = new DatabaseContext())
                {
                    lock (locker)
                    {
                        try
                        {
                            _ = dbcontext.Users.Single(user => user.Name == Name);

                            outcallback.Add(new HandlerCallBack(data: "nameExists", error: true));
                            return;
                        }
                        catch (InvalidOperationException)
                        {
                            var dbuser = dbcontext.Users.Single(dbuser => dbuser.UserId == user.UID);

                            if (Name != null)
                            {
                                dbuser.Name = Name;
                            }

                            if (bytes != null)
                            {
                                using (MemoryStream ms = new MemoryStream(bytes))
                                {
                                    System.Drawing.Bitmap bitmap = new System.Drawing.Bitmap(ms);

                                    if (bitmap.Width > 128 || bitmap.Height > 128)
                                    {
                                        outcallback.Add(new HandlerCallBack(data: "badImage", error: true));
                                        return;
                                    }

                                    var dbAvatar = new Avatar() { Id = dbuser.UserId, AvatarData = bytes };

                                    dbcontext.Avatars.Add(dbAvatar);

                                    dbuser.AvatarId = dbAvatar.Id;
                                }

                            }

                            dbcontext.SaveChanges();

                            outcallback.Add(new HandlerCallBack(data: "Data changed"));

                        }
                    }
                }

            })).Invoke();

            return outcallback;
        }
    }
}