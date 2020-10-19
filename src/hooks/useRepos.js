// @Vendors
import { useState } from 'react'

// @http
import { getReposByUSer } from 'http/users'

const PAGE_SIZE = 5

export default function useRepos () {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [url, setUrl] = useState('')
    const [username, setUsername] = useState('')

    const onSearch = async (reposUrl, newPage = -1) => {
        try {
            console.log('url ==>', { reposUrl, url })
            setLoading(true)
            const urlToUse = reposUrl || localStorage.getItem('reposUrl')
            const pageToSearch = newPage > 0 ? newPage : currentPage + 1
            const currentUrl = `${urlToUse}?page=${pageToSearch}&per_page=${PAGE_SIZE}`
            const data = await getReposByUSer(currentUrl)
            if (data.length) {
                setCurrentPage(pageToSearch)
            }
            setRepos([...repos, ...data])
            setLoading(false)
            document.querySelector('.repos-table .ant-table').scrollTop = 0
            if (reposUrl) {
                setUrl(reposUrl)
            }
        } catch (_) {
            setLoading(false)
        }
    }

    return {
        currentPage,
        setCurrentPage,
        loading,
        setLoading,
        repos,
        url,
        setUrl,
        onSearch,
        username,
        setUsername
    }
}
