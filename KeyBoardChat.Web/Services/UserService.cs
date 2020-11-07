using KeyBoardChat.DataAccess.Models;
using KeyBoardChat.DataAccess.Repositories;
using System.Collections.Generic;

namespace KeyBoardChat.Web.Services
{
    public class UserService
    {
        private readonly UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public IReadOnlyList<User> GetAllUsers()
        {
            return _userRepository.GetAllUsers();
        }
    }
}
