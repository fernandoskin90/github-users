// @Vendors
import React, { useEffect, useContext } from 'react'
import { Table } from 'antd'

// @Context
import { ReposContext } from 'context/index'

const sort = (a, b, key) => a[key].length - b[key].length

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => sort(a, b, 'name'),
        ellipsis: true
    },
    {
        title: 'Languaje',
        dataIndex: 'language',
        key: 'language',
        sorter: (a, b) => sort(a, b, 'languaje'),
        ellipsis: true
    },
    {
        title: 'Default branch',
        dataIndex: 'default_branch',
        key: 'default_branch',
        sorter: (a, b) => sort(a, b, 'default_branch'),
        ellipsis: true
    },
    {
        title: 'Url git',
        dataIndex: 'url',
        key: 'url',
        sorter: (a, b) => sort(a, b, 'url'),
        ellipsis: true
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        sorter: (a, b) => sort(a, b, 'description'),
        ellipsis: true
    }
]

export function ReposTable () {
    const { repos, loading, onSearch, url } = useContext(ReposContext)
    const dataSource = repos.map(rp => {
        return {
            key: rp.id,
            url: rp.url,
            description: rp.description || '',
            default_branch: rp.default_branch || '',
            language: rp.language || '',
            name: rp.name
        }
    })
    const tableConfig = {
        loading: loading,
        columns: columns,
        dataSource,
        pagination: false
    }

    const tableBodyScroll = (event) => {
        const { target } = event
        const scrollBottom = (target.scrollHeight - target.scrollTop) === target.clientHeight
        const scrollTop = target.scrollTop === 0

        if (scrollBottom && !scrollTop) {
            onSearch()
        }
    }

    useEffect(() => {
        document.querySelector('.repos-table .ant-table').addEventListener('scroll', tableBodyScroll)
        return () => {
            document.querySelector('.repos-table .ant-table').removeEventListener('scroll', tableBodyScroll)
        }
    }, [tableBodyScroll])
    return (
        <div className="repos-table-container">
            <Table className="repos-table" {...tableConfig} sticky/>
            <span>{url}</span>
        </div>
    )
}
