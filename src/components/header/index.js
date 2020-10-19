// @Vendors
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    GithubOutlined
} from '@ant-design/icons'
import './styles.scss'

// @context
import { ReposContext } from 'context/index'

// @http
import { getInfoUser } from 'http/users'
import { REPOS_URL } from 'constants/constants'

export function Header () {
    const { username, setUsername, onSearch, setLoading } = useContext(ReposContext)

    const onKeyDown = async (event) => {
        try {
            if (event.key === 'Enter') {
                setLoading(true)
                const { repos_url } = await getInfoUser(username)
                localStorage.setItem(REPOS_URL, repos_url)
                onSearch(repos_url, 1)
            }
        } catch (_) {
            setLoading(false)
        }
    }

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <GithubOutlined />
                </Link>
            </div>
            <div className="header__search">

                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Search user"
                />
            </div>
            <section>User Info</section>
        </header>
    )
}
