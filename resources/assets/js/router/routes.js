import Login from '../views/Login'
import Signup from '../views/Signup'
import Forum from '../views/Forum'
import AskQuestion from '../views/AskQuestion'
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
    path: '/ask-question',
    name: 'AskQuestion',
    component: AskQuestion
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