'use client'
import React, { useState } from 'react'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import ComponentCard from '@/components/common/ComponentCard'
import Label from '@/components/form/Label'
import Input from '@/components/form/input/InputField'
import TextArea from '@/components/form/input/TextArea'
import DatePicker from '@/components/form/date-picker'
import Select from '@/components/form/Select'
import { ChevronDownIcon } from '@/icons'

export default function LambTrackingForm() {
  const [topic, setTopic] = useState('')
  const [observation, setObservation] = useState('')
  const [selectedName, setSelectedName] = useState('')
  const [responseScore, setResponseScore] = useState('')

  // ตัวอย่างรายชื่อลูกแกะ
  const nameOptions = [
    { value: 'lamb1', label: 'ลูกแกะ 1' },
    { value: 'lamb2', label: 'ลูกแกะ 2' },
    { value: 'lamb3', label: 'ลูกแกะ 3' },
    { value: 'lamb4', label: 'ลูกแกะ 4' },
    { value: 'lamb5', label: 'ลูกแกะ 5' },
  ]

  // คะแนนการตอบสนอง 1-5
  const scoreOptions = [
    { value: '1', label: '1 - ต้องปรับปรุง' },
    { value: '2', label: '2 - พอใช้' },
    { value: '3', label: '3 - ปานกลาง' },
    { value: '4', label: '4 - ดี' },
    { value: '5', label: '5 - ดีมาก' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ selectedName, topic, observation, responseScore })
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="บันทึกการใช้เวลากับลูกแกะ" />
      <div className="grid grid-cols-1 gap-6">
        <ComponentCard title="บันทึกการพบปะ" desc="กรอกข้อมูลการใช้เวลากับลูกแกะ">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* ชื่อลูกแกะ */}
              <div>
                <Label>ชื่อ</Label>
                <div className="relative">
                  <Select
                    options={nameOptions}
                    placeholder="เลือกชื่อลูกแกะ"
                    onChange={(value) => setSelectedName(value)}
                    className="dark:bg-dark-900"
                  />
                  <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>

              {/* วันที่พบ */}
              <div>
                <DatePicker
                  id="meeting-date"
                  label="วันที่พบ"
                  placeholder="เลือกวันที่"
                  onChange={(dates, currentDateString) => {
                    console.log({ dates, currentDateString })
                  }}
                />
              </div>

              {/* หัวข้อที่พูดคุย */}
              <div>
                <Label htmlFor="topic">หัวข้อที่พูดคุย</Label>
                <Input
                  type="text"
                  id="topic"
                  name="topic"
                  placeholder="ระบุหัวข้อที่พูดคุย"
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              {/* ข้อสังเกต */}
              <div>
                <Label>ข้อสังเกต</Label>
                <TextArea
                  placeholder="บันทึกข้อสังเกตที่พบ..."
                  rows={6}
                  value={observation}
                  onChange={(value) => setObservation(value)}
                />
              </div>

              {/* คะแนนการตอบสนอง */}
              <div>
                <Label>คะแนนการตอบสนอง</Label>
                <div className="relative">
                  <Select
                    options={scoreOptions}
                    placeholder="เลือกคะแนน"
                    onChange={(value) => setResponseScore(value)}
                    className="dark:bg-dark-900"
                  />
                  <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-600 focus:outline-none focus:ring-3 focus:ring-brand-500/50 dark:bg-brand-600 dark:hover:bg-brand-700"
                >
                  บันทึกข้อมูล
                </button>
              </div>
            </div>
          </form>
        </ComponentCard>
      </div>
    </div>
  )
}
