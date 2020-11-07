using KeyBoardChat.DataAccess.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KeyBoardChat.DataAccess.Infrastructure
{
    public static class DataAccessBindingExtensions
    {
        public static IServiceCollection AddDataAccess(this IServiceCollection serviceCollection)
        {
            IEnumerable<Type> types = typeof(UserRepository).Assembly
                .GetTypes()
                .Where(t => t.Name.EndsWith("Repository"));

            foreach (Type type in types)
            {
                serviceCollection.AddScoped(type);
            }

            return serviceCollection;
        }
    }
}
