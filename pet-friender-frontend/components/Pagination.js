import Link from 'next/link'
import { Button } from 'semantic-ui-react'
import { PER_PAGE } from '../config'

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <div>
      {page > 1 && (
        <div>
          <Link href={`/dogs?page=${page - 1}`}>
            <Button>Prev</Button>
          </Link>
        </div>
      )}

      {page < lastPage && (
        <div>
          <Link href={`/dogs?page=${page + 1}`}>
            <Button floated="right">Next</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
