import { lazyLoad } from '../../../utils/loadable'
import { CustomLoader } from '../../components/CustomLoader'

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
  {
    fallback: <CustomLoader />,
  },
)
