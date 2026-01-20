'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table'

import Badge from '../ui/badge/Badge'
import Image from 'next/image'
import Pagination from './Pagination'

const ITEMS_PER_PAGE = 20

interface Order {
  id: number
  user: {
    image: string
    name: string
    role: string
  }
  projectName: string
  team: {
    images: string[]
  }
  status: string
  budget: string
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: '/images/user/user-17.jpg',
      name: 'Lindsey Curtis',
      role: 'Web Designer',
    },
    projectName: 'Agency Website',
    team: {
      images: ['/images/user/user-22.jpg', '/images/user/user-23.jpg', '/images/user/user-24.jpg'],
    },
    budget: '3.9K',
    status: 'Active',
  },
  {
    id: 2,
    user: {
      image: '/images/user/user-18.jpg',
      name: 'Kaiya George',
      role: 'Project Manager',
    },
    projectName: 'Technology',
    team: {
      images: ['/images/user/user-25.jpg', '/images/user/user-26.jpg'],
    },
    budget: '24.9K',
    status: 'Pending',
  },
  {
    id: 3,
    user: {
      image: '/images/user/user-17.jpg',
      name: 'Zain Geidt',
      role: 'Content Writing',
    },
    projectName: 'Blog Writing',
    team: {
      images: ['/images/user/user-27.jpg'],
    },
    budget: '12.7K',
    status: 'Active',
  },
  {
    id: 4,
    user: {
      image: '/images/user/user-20.jpg',
      name: 'Abram Schleifer',
      role: 'Digital Marketer',
    },
    projectName: 'Social Media',
    team: {
      images: ['/images/user/user-28.jpg', '/images/user/user-29.jpg', '/images/user/user-30.jpg'],
    },
    budget: '2.8K',
    status: 'Cancel',
  },
  {
    id: 5,
    user: {
      image: '/images/user/user-21.jpg',
      name: 'Carla George',
      role: 'Front-end Developer',
    },
    projectName: 'Website',
    team: {
      images: ['/images/user/user-31.jpg', '/images/user/user-32.jpg', '/images/user/user-33.jpg'],
    },
    budget: '4.5K',
    status: 'Active',
  },
  // Additional sample data for pagination demo
  {
    id: 6,
    user: {
      image: '/images/user/user-17.jpg',
      name: 'Marcus Johnson',
      role: 'Backend Developer',
    },
    projectName: 'API Development',
    team: {
      images: ['/images/user/user-22.jpg', '/images/user/user-23.jpg'],
    },
    budget: '8.2K',
    status: 'Active',
  },
  {
    id: 7,
    user: {
      image: '/images/user/user-18.jpg',
      name: 'Sarah Miller',
      role: 'UX Designer',
    },
    projectName: 'Mobile App',
    team: {
      images: ['/images/user/user-24.jpg', '/images/user/user-25.jpg', '/images/user/user-26.jpg'],
    },
    budget: '15.3K',
    status: 'Pending',
  },
  {
    id: 8,
    user: {
      image: '/images/user/user-20.jpg',
      name: 'David Wilson',
      role: 'DevOps Engineer',
    },
    projectName: 'Infrastructure',
    team: {
      images: ['/images/user/user-27.jpg'],
    },
    budget: '6.1K',
    status: 'Active',
  },
  {
    id: 9,
    user: {
      image: '/images/user/user-21.jpg',
      name: 'Emily Brown',
      role: 'QA Engineer',
    },
    projectName: 'Testing Suite',
    team: {
      images: ['/images/user/user-28.jpg', '/images/user/user-29.jpg'],
    },
    budget: '3.4K',
    status: 'Cancel',
  },
  {
    id: 10,
    user: {
      image: '/images/user/user-17.jpg',
      name: 'Michael Davis',
      role: 'Full Stack Developer',
    },
    projectName: 'E-commerce Platform',
    team: {
      images: ['/images/user/user-30.jpg', '/images/user/user-31.jpg', '/images/user/user-32.jpg'],
    },
    budget: '22.5K',
    status: 'Active',
  },
  {
    id: 11,
    user: {
      image: '/images/user/user-18.jpg',
      name: 'Jessica Taylor',
      role: 'Product Manager',
    },
    projectName: 'Product Launch',
    team: {
      images: ['/images/user/user-22.jpg', '/images/user/user-23.jpg'],
    },
    budget: '18.0K',
    status: 'Pending',
  },
  {
    id: 12,
    user: {
      image: '/images/user/user-20.jpg',
      name: 'Chris Anderson',
      role: 'Data Analyst',
    },
    projectName: 'Analytics Dashboard',
    team: {
      images: ['/images/user/user-24.jpg'],
    },
    budget: '7.8K',
    status: 'Active',
  },
  {
    id: 13,
    user: {
      image: '/images/user/user-21.jpg',
      name: 'Amanda White',
      role: 'Content Strategist',
    },
    projectName: 'Content Marketing',
    team: {
      images: ['/images/user/user-25.jpg', '/images/user/user-26.jpg'],
    },
    budget: '5.2K',
    status: 'Active',
  },
  {
    id: 14,
    user: {
      image: '/images/user/user-17.jpg',
      name: 'Robert Martinez',
      role: 'Security Specialist',
    },
    projectName: 'Security Audit',
    team: {
      images: ['/images/user/user-27.jpg', '/images/user/user-28.jpg'],
    },
    budget: '11.5K',
    status: 'Pending',
  },
  {
    id: 15,
    user: {
      image: '/images/user/user-18.jpg',
      name: 'Laura Garcia',
      role: 'UI Designer',
    },
    projectName: 'Design System',
    team: {
      images: ['/images/user/user-29.jpg', '/images/user/user-30.jpg', '/images/user/user-31.jpg'],
    },
    budget: '9.7K',
    status: 'Active',
  },
  {
    id: 16,
    user: {
      image: '/images/user/user-20.jpg',
      name: 'Daniel Lee',
      role: 'Mobile Developer',
    },
    projectName: 'iOS App',
    team: {
      images: ['/images/user/user-32.jpg', '/images/user/user-33.jpg'],
    },
    budget: '14.2K',
    status: 'Active',
  },
  {
    id: 17,
    user: {
      image: '/images/user/user-21.jpg',
      name: 'Nicole Harris',
      role: 'Scrum Master',
    },
    projectName: 'Agile Training',
    team: {
      images: ['/images/user/user-22.jpg'],
    },
    budget: '4.0K',
    status: 'Cancel',
  },
  {
    id: 18,
    user: {
      image: '/images/user/user-17.jpg',
      name: 'James Clark',
      role: 'Solutions Architect',
    },
    projectName: 'Cloud Migration',
    team: {
      images: ['/images/user/user-23.jpg', '/images/user/user-24.jpg', '/images/user/user-25.jpg'],
    },
    budget: '28.0K',
    status: 'Active',
  },
  {
    id: 19,
    user: {
      image: '/images/user/user-18.jpg',
      name: 'Stephanie Lewis',
      role: 'Business Analyst',
    },
    projectName: 'Requirements Gathering',
    team: {
      images: ['/images/user/user-26.jpg', '/images/user/user-27.jpg'],
    },
    budget: '6.5K',
    status: 'Pending',
  },
  {
    id: 20,
    user: {
      image: '/images/user/user-20.jpg',
      name: 'Kevin Robinson',
      role: 'Technical Writer',
    },
    projectName: 'Documentation',
    team: {
      images: ['/images/user/user-28.jpg'],
    },
    budget: '3.2K',
    status: 'Active',
  },
  {
    id: 21,
    user: {
      image: '/images/user/user-21.jpg',
      name: 'Rachel Walker',
      role: 'Frontend Developer',
    },
    projectName: 'Dashboard Redesign',
    team: {
      images: ['/images/user/user-29.jpg', '/images/user/user-30.jpg'],
    },
    budget: '10.8K',
    status: 'Active',
  },
  {
    id: 22,
    user: {
      image: '/images/user/user-17.jpg',
      name: 'Andrew Hall',
      role: 'Database Admin',
    },
    projectName: 'Database Optimization',
    team: {
      images: ['/images/user/user-31.jpg', '/images/user/user-32.jpg', '/images/user/user-33.jpg'],
    },
    budget: '7.3K',
    status: 'Pending',
  },
  {
    id: 23,
    user: {
      image: '/images/user/user-18.jpg',
      name: 'Michelle Young',
      role: 'Marketing Manager',
    },
    projectName: 'Campaign Launch',
    team: {
      images: ['/images/user/user-22.jpg', '/images/user/user-23.jpg'],
    },
    budget: '12.0K',
    status: 'Active',
  },
  {
    id: 24,
    user: {
      image: '/images/user/user-20.jpg',
      name: 'Thomas King',
      role: 'Systems Engineer',
    },
    projectName: 'Network Setup',
    team: {
      images: ['/images/user/user-24.jpg'],
    },
    budget: '8.9K',
    status: 'Cancel',
  },
  {
    id: 25,
    user: {
      image: '/images/user/user-21.jpg',
      name: 'Elizabeth Scott',
      role: 'HR Coordinator',
    },
    projectName: 'Onboarding System',
    team: {
      images: ['/images/user/user-25.jpg', '/images/user/user-26.jpg'],
    },
    budget: '5.6K',
    status: 'Active',
  },
]

export default function BasicTableOne() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE)

  const handleEdit = (id: number) => {
    router.push('/profile')
  }

  const handleDelete = (id: number) => {
    // Handle delete logic here
    console.log('Delete item:', id)
  }
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentData = tableData.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-white/3">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/5">
              <TableRow>
                <TableCell isHeader className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400">
                  Name
                </TableCell>
                <TableCell isHeader className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400">
                  GroupCare
                </TableCell>

                <TableCell isHeader className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400">
                  Status
                </TableCell>
                <TableCell isHeader className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400">
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
              {currentData.map(order => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 text-start sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <Image width={40} height={40} src={order.user.image} alt={order.user.name} />
                      </div>
                      <div>
                        <span className="text-theme-sm block font-medium text-gray-800 dark:text-white/90">{order.user.name}</span>
                        <span className="text-theme-xs block text-gray-500 dark:text-gray-400">{order.user.role}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">{order.projectName}</TableCell>
               
                  <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                    <Badge size="sm" color={order.status === 'Active' ? 'success' : order.status === 'Pending' ? 'warning' : 'error'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(order.id)}
                        className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-600"
                      >
                        <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="inline-flex items-center justify-center rounded-lg bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600"
                      >
                        <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4 dark:border-white/5">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {startIndex + 1} to {Math.min(endIndex, tableData.length)} of {tableData.length} entries
        </div>
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  )
}
