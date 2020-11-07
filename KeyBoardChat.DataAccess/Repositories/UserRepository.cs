using KeyBoardChat.DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace KeyBoardChat.DataAccess.Repositories
{
    public class UserRepository
    {
        private readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IReadOnlyList<User> GetAllUsers()
        {
            return _dataContext.Users.ToList();
        }
    }
}
