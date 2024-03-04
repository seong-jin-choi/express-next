// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: '관리자 계정 관리',
      contentTitle: '유저 관리',
      path: '/admin/dashboard',
      icon: 'tabler:user-search'
    },
    {
      contentTitle: '샘플 관리',
      title: '샘플 데이터 관리',
      path: '/admin/dashboard',
      icon: 'tabler:test-pipe'
    },
    {
      contentTitle: '매거진',
      title: '샘플 데이터 관리22',
      path: '/admin/dashboard',
      icon: 'tabler:test-pipe'
    }
  ]
}

export default navigation
