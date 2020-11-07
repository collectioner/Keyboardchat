using KeyBoardChat.Web.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KeyBoardChat.Web.Infrastructure
{
    public static class WebBindingExtensions
    {
        public static IServiceCollection AddWeb(this IServiceCollection services)
        {
            IEnumerable<Type> types = typeof(UserService).Assembly
                .GetTypes()
                .Where(t => t.Name.EndsWith("Service"));

            foreach (Type type in types)
            {
                services.AddScoped(type);
            }

            return services;
        }
    }
}
