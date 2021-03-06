import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

import MainPage from './components/MainPage/MainPage'
import Post from './components/PostPage/Post'
import AllPostsPage from './components/AllPostsPage/AllPostsPage'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/posts' component={AllPostsPage} />
          <Route exact path='/404' component={PageNotFound}/>
          <Route path='/:postname' component={Post}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App