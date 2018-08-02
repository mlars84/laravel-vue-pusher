import Login from '../views/Login'
import Signup from '../views/Signup'
import Forum from '../views/Forum'
import Question from '../views/Question'
import Category from '../views/Category'
import Logout from '../views/Logout'
import Read from '../views/Read'

export default [
  { 
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  { 
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  { 
    path: '/question',
    name: 'Question',
    component: Question
  },
  { 
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/question/:slug',
    name: 'Read',
    component: Read
  }
]