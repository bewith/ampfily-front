import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>ここはHOMEの{id}ページです</div>
}

export default Home
