'use client'
import React, { useState } from 'react'
import Checkbox from '../form/input/Checkbox'

// รายชื่อบทเรียนทั้งหมด 18 บท
const chapters = [
  { id: 1, name: 'บทที่ 1: ความรักของพระเจ้า' },
  { id: 2, name: 'บทที่ 2: การสร้างสรรค์' },
  { id: 3, name: 'บทที่ 3: ความบาป' },
  { id: 4, name: 'บทที่ 4: พระเยซูคริสต์' },
  { id: 5, name: 'บทที่ 5: การไถ่บาป' },
  { id: 6, name: 'บทที่ 6: ความเชื่อ' },
  { id: 7, name: 'บทที่ 7: การกลับใจ' },
  { id: 8, name: 'บทที่ 8: บัพติศมา' },
  { id: 9, name: 'บทที่ 9: พระวิญญาณบริสุทธิ์' },
  { id: 10, name: 'บทที่ 10: การอธิษฐาน' },
  { id: 11, name: 'บทที่ 11: พระคัมภีร์' },
  { id: 12, name: 'บทที่ 12: คริสตจักร' },
  { id: 13, name: 'บทที่ 13: การนมัสการ' },
  { id: 14, name: 'บทที่ 14: การถวาย' },
  { id: 15, name: 'บทที่ 15: การรับใช้' },
  { id: 16, name: 'บทที่ 16: การประกาศ' },
  { id: 17, name: 'บทที่ 17: ชีวิตคริสเตียน' },
  { id: 18, name: 'บทที่ 18: การเสด็จกลับมา' },
]

export default function UserChapterCard() {
  // สร้าง state สำหรับเก็บสถานะของแต่ละบทเรียน
  const [completedChapters, setCompletedChapters] = useState<Record<number, boolean>>(
    chapters.reduce((acc, chapter) => ({ ...acc, [chapter.id]: false }), {})
  )

  const handleCheckboxChange = (chapterId: number, checked: boolean) => {
    setCompletedChapters(prev => ({
      ...prev,
      [chapterId]: checked
    }))
  }

  // นับจำนวนบทเรียนที่เรียนแล้ว
  const completedCount = Object.values(completedChapters).filter(Boolean).length

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          บทเรียนที่เรียนแล้ว
        </h3>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-500 dark:bg-brand-500/10">
          {completedCount} / {chapters.length} บท
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div 
            className="h-2 rounded-full bg-brand-500 transition-all duration-300"
            style={{ width: `${(completedCount / chapters.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Checkbox Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id}
            className="flex items-center rounded-lg border border-gray-100 p-3 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/[0.03]"
          >
            <Checkbox
              id={`chapter-${chapter.id}`}
              checked={completedChapters[chapter.id]}
              onChange={(checked) => handleCheckboxChange(chapter.id, checked)}
              label={chapter.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
