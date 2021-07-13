import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'

const NotFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle={trans('message_404')}
    extra={<Link to="/"><Button type="primary">{trans('back_home')}</Button></Link>}
  />
)

export default NotFoundPage
