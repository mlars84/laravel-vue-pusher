import Login from '../views/Login'
import Forum from '../views/Forum'
import Question from '../views/Question'
import Category from '../views/Category'

export default [
  { 
    path: '/login',
    component: Login
  },
  { 
    path: '/forum',
    component: Forum
  },
  { 
    path: '/question',
    component: Question
  },
  { 
    path: '/category',
    component: Category
  }
]