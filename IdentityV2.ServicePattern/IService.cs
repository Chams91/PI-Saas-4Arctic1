﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace IdentityV2.ServicePattern
{
    public interface IService<T> where T : class
    {
        void Add(T entity);
        T GetById(int id);
        T Get(Expression<Func<T, bool>> Condition);
        T GetById(string id);
        IEnumerable<T> GetMany(Expression<Func<T, bool>> Condition = null,
            Expression<Func<T, bool>> OrderBy = null);
        void Update(T entity);
        void Delete(T entity);
        void Delete(Expression<Func<T, bool>> Condition);
        void Commit();
        void Dispose();
        IEnumerable<T> GetAll();
    }
}
