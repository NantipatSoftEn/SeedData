'use client'
import React, { useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from 'recharts'
import BlessingStat from './BlessingStat'

const giftsData = [
    { subject: 'Teaching', A: 80, fullMark: 100 },
    { subject: 'Compassion', A: 95, fullMark: 100 },
    { subject: 'Leadership', A: 70, fullMark: 100 },
    { subject: 'Prophecy', A: 60, fullMark: 100 },
    { subject: 'Service', A: 85, fullMark: 100 },
    { subject: 'Evangelism', A: 75, fullMark: 100 },
]
const giftFromGodSample = {
    Prophecy: 8,
    Pastoral: 6,
    Teaching: 12,
    WordContainerIntelligence: 9,
    WordContainKnowledge: 7,
    WarningAndEncouragement: 10,
    ObservationOfSpirits: 5,
    Donation: 8,
    Pampering: 9,
    Compassion: 13,
    Missionary: 7,
    Announcer: 11,
    GuestReception: 10,
    Belief: 12,
    Owner: 6,
    Executive: 8,
    Miracle: 4,
    TreatmentOfDisease: 5,
    SpeakingInStrangeLanguages: 3,
    TranslationOfStrangeLanguages: 2,
    Ambassador: 7,
    BeingSingle: 4,
    PrayerOfSupplication: 11,
    Exorcism: 3,
    Benefactor: 9,
}

export default function UserBlessingStatCard() {
    const [activeGiftTab, setActiveGiftTab] = useState('radar')
    return (
        <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800 w-full">
            <div className="flex flex-col gap-6 w-full">
                <div className="w-full">
                    <h4 className="text-lg font-semibold text-gray-800 lg:mb-6 dark:text-white/90">
                        Gift
                    </h4>
                    <div className="border-b border-gray-200 p-4">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setActiveGiftTab('radar')}
                                className={`rounded-md px-4 py-2 text-sm font-medium ${
                                    activeGiftTab === 'radar'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Radar Chart
                            </button>
                            <button
                                onClick={() => setActiveGiftTab('detailed')}
                                className={`rounded-md px-4 py-2 text-sm font-medium ${
                                    activeGiftTab === 'detailed'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Detailed View
                            </button>
                        </div>
                    </div>
                    <div className="p-6 w-full">
                        {activeGiftTab === 'radar' && (
                            <div className="h-[300px] lg:h-[500px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart
                                        cx="50%"
                                        cy="50%"
                                        outerRadius="80%"
                                        data={giftsData}
                                    >
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="subject" />
                                        <PolarRadiusAxis
                                            angle={30}
                                            domain={[0, 100]}
                                        />
                                        <Radar
                                            name="Gifts"
                                            dataKey="A"
                                            stroke="#8884d8"
                                            fill="#8884d8"
                                            fillOpacity={0.6}
                                        />
                                        <Legend />
                                        <Tooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        )}

                        {activeGiftTab === 'detailed' && (
                            <div className="w-full">
                                <BlessingStat score={giftFromGodSample} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
