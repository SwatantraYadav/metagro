'use client';
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Solutions = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Mango Tree Management Solutions
        </h1>

        <div className="max-w-4xl mx-auto">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-8">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Problems
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Solutions
              </Tab>
            </Tab.List>

            <Tab.Panels>
              {/* Problems Panel */}
              <Tab.Panel className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Key Pruning Challenges in Mango Cultivation
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Overcrowding Issues
                    </h3>
                    <p className="text-gray-600">
                      Poor air circulation and light penetration due to overcrowded branches.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Harvesting Difficulties
                    </h3>
                    <p className="text-gray-600">
                      Higher labor costs due to difficult and dangerous harvesting conditions.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Aging Trees
                    </h3>
                    <p className="text-gray-600">
                      85-90% of mango trees in UP are in older age group, resulting in low yield.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Disease Risk
                    </h3>
                    <p className="text-gray-600">
                      Dense canopies create favorable environments for pests and diseases.
                    </p>
                  </div>
                </div>
              </Tab.Panel>

              {/* Solutions Panel */}
              <Tab.Panel className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                      Our Comprehensive Solutions
                    </h2>
                    <p>We are developing an AI based mechanized pruning system, where drones equipped with sensors & super sensitive cameras, capture 3D image
of the trees (E.g., Canopy, Diameter, Height & Branches). It creates the real time picture of the tree & generates a suggestive pruning (secondary,
territory) areas based on SOP’s issued by CISH. It also works simultaneously on AI data and real time scientist feedback to generate suggestive
Pruning Portion. It keeps improving on precision, data & TAT. The software transmits the data to the Pruning machine for action (machine
learning).
</p><br></br>
                    {/* Technology Solutions */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-green-700 border-b pb-2">
                        Smart Technology Integration
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-lg mb-2 text-gray-700">
                            AI-Powered Analysis
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Tree structure analysis</li>
                            <li>Growth pattern monitoring</li>
                            <li>Optimal pruning recommendations</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-lg mb-2 text-gray-700">
                            Digital Monitoring
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Real-time health tracking</li>
                            <li>Automated scheduling</li>
                            <li>Performance analytics</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Training Solutions */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-green-700 border-b pb-2">
                        Education & Support
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-lg mb-2 text-gray-700">
                            Expert Training
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Hands-on workshops</li>
                            <li>Best practice guidance</li>
                            <li>Certification programs</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-lg mb-2 text-gray-700">
                            Ongoing Support
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>24/7 expert consultation</li>
                            <li>Problem-solving assistance</li>
                            <li>Regular check-ins</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Implementation Timeline */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-green-700 border-b pb-2">
                        Implementation Process
                      </h3>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <ol className="list-decimal list-inside space-y-3 text-gray-600">
                          <li className="font-semibold">Initial Assessment
                            <p className="ml-6 font-normal">Comprehensive evaluation of current orchard conditions</p>
                          </li>
                          <li className="font-semibold">Custom Solution Design
                            <p className="ml-6 font-normal">Tailored planning based on specific needs</p>
                          </li>
                          <li className="font-semibold">Technology Integration
                            <p className="ml-6 font-normal">Installation of monitoring and management systems</p>
                          </li>
                          <li className="font-semibold">Training & Handover
                            <p className="ml-6 font-normal">Comprehensive training and ongoing support setup</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
