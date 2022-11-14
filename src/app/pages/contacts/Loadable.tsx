import { lazyLoad } from '../../../utils/loadable'
import { CustomLoader } from '../../components/CustomLoader'

export const ContactsPage = lazyLoad(
  () => import('./index'),
  module => module.ContactsPage,
  {
    fallback: <CustomLoader />,
  },
)
