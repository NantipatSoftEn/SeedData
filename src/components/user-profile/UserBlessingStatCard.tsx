'use client'
import React from 'react'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../ui/modal'
import Button from '../ui/button/Button'
import Input from '../form/input/InputField'
import Label from '../form/Label'

export default function UserBlessingStatCard() {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 lg:mb-6 dark:text-white/90">Gift</h4>
        </div>
      </div>
    </div>
  )
}
