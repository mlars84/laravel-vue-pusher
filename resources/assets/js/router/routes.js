import Login from '../views/Login'
import Signup from '../views/Signup'
import Forum from '../views/Forum'
import Question from '../views/Question'
import Category from '../views/Category'

export default [
  { 
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
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