import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import StatisTable from "./StatiscTable"
import HeroRasingSize from "./HeroRasingSize"
import VillainRasingSize from "./VillainRasingSize"

import "./detailStyle.css"

const DetailTable = ({ reportSetting, setReportSetting, detailedTable, filter, raiseSizingTable }: any) => {

    const [displayTabSelect, setDisplayTabSelect] = useState(0)

    return (
        <div className='p-2'>

            <Tab.Group defaultIndex={displayTabSelect}>
                <div className='pb-[5px] relative'>
                    <Tab.List className="mt-0 flex flex-wrap justify-center border-b border-white-light dark:border-[#191e3a]">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        `${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                dark:hover:border-b-black' -mb-[1px] w-full lg:w-[160px] block border border-transparent p-3.5 py-2 hover:text-primary`}
                                    onClick={() => setDisplayTabSelect(0)}
                                >

                                    Action Analysis
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        `${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                dark:hover:border-b-black' -mb-[1px] w-full lg:w-[160px] block border border-transparent p-3.5 py-2 hover:text-primary flex `}
                                    onClick={() => setDisplayTabSelect(1)}
                                >
                                    <svg height="1.5em" width="1.5em" version="1.1" id="_x32_" viewBox="0 0 512 512" fill="#00ff00" className='mr-2'>
                                        <style type="text/css">
                                        </style>
                                        <g>
                                            <path className="st0" d="M447.914,152.582c7.106-21.525-11.432-27.796-32.816-25.646c-13.67,1.371-34.454,10.077-44.728,5.034
                                            c0,0-5.791-92.214-82.374-107.625v34.745h-7.524c-0.78-0.157-1.529-0.331-2.324-0.464V7.784c0-4.302-4.168-7.784-9.297-7.784H256
                                            h-12.85c-5.129,0-9.297,3.482-9.297,7.784v50.843c-0.796,0.134-1.544,0.307-2.324,0.464h-7.524V24.346
                                            c-76.582,15.41-82.374,107.625-82.374,107.625c-10.274,5.042-31.058-3.664-44.728-5.034c-21.384-2.151-39.923,4.12-32.816,25.646
                                            c4.9,14.852,24.55,27.284,46.359,36.857c9.809,4.302,20.572,7.769,30.854,10.519c-0.433,2.032-0.678,4.215-0.678,6.555
                                            c0,4.325,0.741,9.186,2.34,14.772c4.215,14.686,8.021,24.172,12.953,31.13c2.458,3.458,5.263,6.232,8.321,8.344
                                            c1.851,1.292,3.773,2.285,5.712,3.16c4.436,20.524,13.914,34.95,22.36,45.295l-0.275-0.032c-4.46-0.007-8.588,1.142-12.031,3.026
                                            c-5.193,2.853-8.833,7.138-11.228,11.566c-2.38,4.475-3.64,9.076-3.664,13.552c0,6.106,0,15.49,0,21.352
                                            c-7.383,2.308-21.596,7.076-36.771,13.914c-10.96,4.956-22.407,10.976-32.24,18.106c-9.793,7.169-18.192,15.395-22.36,25.7
                                            c-5.563,13.977-7.335,25.614-7.335,34.636c-0.008,13.536,3.986,21.052,4.49,21.903l0.733,1.3l1.198,0.899
                                            c0.969,0.756,26.11,19.13,90.268,29.324c26.512,4.531,57.878,7.532,92.907,7.54c34.438,0,65.316-2.923,91.552-7.319
                                            c65.166-10.156,90.647-28.79,91.616-29.546l1.206-0.899l0.732-1.3c0.504-0.858,4.492-8.367,4.484-21.903
                                            c0.008-9.022-1.765-20.659-7.328-34.636c-4.168-10.305-12.566-18.531-22.36-25.7c-14.749-10.684-33.162-18.925-48.021-24.677
                                            c-8.808-3.396-16.27-5.862-20.99-7.336c0-5.87,0-15.253,0-21.36c-0.008-2.994-0.59-6.012-1.663-9.045
                                            c-1.622-4.522-4.348-9.1-8.54-12.787c-4.152-3.688-10.006-6.343-16.719-6.312l-0.276,0.032
                                            c8.447-10.345,17.925-24.771,22.36-45.295c1.938-0.875,3.861-1.868,5.712-3.16c4.609-3.176,8.517-7.792,11.834-14.072
                                            c3.333-6.303,6.287-14.371,9.439-25.401c1.6-5.594,2.332-10.447,2.332-14.78c0.008-2.332-0.244-4.523-0.67-6.555
                                            c10.282-2.758,21.044-6.209,30.853-10.511C423.363,179.866,443.013,167.434,447.914,152.582z M221.672,113.298
                                            C247.672,106.01,256,87.282,256,87.282s8.328,18.728,34.328,26.016v33.296c0,0-14.56,22.88-34.328,26.008
                                            c-19.768-3.128-34.328-26.008-34.328-26.008V113.298z M150.738,185.965c-1.993,1.229-3.884,3.16-5.554,5.436
                                            c-7.627-3.396-13.354-6.5-16.294-8.58c-9.384-6.642-3.948-12.661,11.677-4.412c4.175,2.206,8.375,4.302,12.63,6.287
                                            C152.393,185.043,151.581,185.452,150.738,185.965z M246.16,492.121c-27.742-0.473-54.561-2.773-79.758-7.066
                                            c-47.43-7.54-71.555-19.619-79.112-24.015c-0.551-2.001-1.197-5.358-1.197-9.999c0-7.366,1.678-15.529,4.83-24.235
                                            c46.225,9.29,99.038,14.757,155.238,15.34V492.121z M246.16,375.83c-21.525-0.496-42.184-2.482-61.361-5.902v-32.602
                                            c0.008-1.111,0.488-2.671,1.355-4.302c0.858-1.591,1.993-2.829,3.309-3.545c0.489-0.268,1.339-0.606,2.498-0.606
                                            c0.85,0,2.088,0.134,3.806,0.74c5.112,1.804,11.582,2.93,16.104,3.561c5.058,0.701,10.935,1.276,17.444,1.686
                                            c6.358,0.402,12.33,0.59,16.845,0.693V375.83z M421.086,426.798c3.136,8.682,4.821,16.852,4.821,24.219
                                            c0,4.632-0.645,7.974-1.212,10.022c-7.628,4.444-32.083,16.695-80.176,24.188c-25.102,4.207-51.504,6.437-78.679,6.893v-49.975
                                            C322.04,441.563,374.86,436.095,421.086,426.798z M319.914,328.872c1.993,0,3.254,0.945,3.702,1.347
                                            c1.686,1.488,2.608,3.38,3.081,4.704c0.323,0.906,0.504,1.781,0.504,2.45v32.555c-19.178,3.42-39.836,5.406-61.361,5.902v-40.285
                                            c8.698-0.189,22.636-0.732,34.328-2.379c4.499-0.623,10.991-1.757,16.12-3.577C317.581,329.132,318.866,328.872,319.914,328.872z
                                            M355.155,217.331c-3.978,14.008-7.548,22.171-10.826,26.694c-1.638,2.292-3.136,3.718-4.806,4.884
                                            c-1.67,1.158-3.584,2.08-6.098,2.978l-3.956,1.402l-0.725,4.136c-4.617,25.867-17.948,40.426-27.796,51.386l-1.852,2.065v2.537
                                            l-1.671,0.26c-11.487,1.615-25.787,2.095-34.21,2.237L256,315.966l-7.218-0.056c-4.727-0.071-11.306-0.26-18.231-0.701
                                            c-5.389-0.339-10.976-0.843-15.978-1.536l-1.67-0.26v-2.537l-1.852-2.065c-9.849-10.96-23.18-25.519-27.797-51.386l-0.732-4.136
                                            l-3.948-1.402c-2.513-0.899-4.428-1.82-6.099-2.978c-2.474-1.741-4.704-4.12-7.319-8.99c-2.584-4.846-5.318-12.086-8.312-22.588
                                            c-1.315-4.601-1.78-8.17-1.78-10.818c0-3.081,0.591-4.877,1.198-6.012c0.906-1.654,2.025-2.363,3.435-2.93
                                            c1.158-0.442,2.355-0.56,2.836-0.584l7.714,0.954v-6.036c23.731,8.919,50.448,14.276,85.754,14.276
                                            c35.306,0,62.022-5.357,85.754-14.276v5.626l7.524-0.544c0.354-0.031,2.781,0.197,4.342,1.237c0.827,0.528,1.496,1.142,2.12,2.277
                                            c0.598,1.135,1.189,2.931,1.197,6.004C356.936,209.168,356.463,212.73,355.155,217.331z M383.11,182.821
                                            c-2.923,2.064-8.62,5.161-16.215,8.541c-2.364-3.262-5.334-5.405-8.107-6.658c4.262-1.993,8.462-4.089,12.646-6.295
                                            C387.057,170.16,392.493,176.179,383.11,182.821z"/>
                                        </g>
                                    </svg>
                                    Raise Sizing
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        `${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                dark:hover:border-b-black' -mb-[1px] w-full lg:w-[160px] block border border-transparent p-3.5 py-2 hover:text-primary flex`}
                                    onClick={() => setDisplayTabSelect(2)}
                                >
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 32 32" version="1.1" fill="#ff0000" className='mr-2'>
                                        <path d="M19.971 14.602c0.578-0.088 1.666-0.472 2.049-0.771 0.418-0.244 0.635-0.534 0.648-0.872 0.041-0.515 0.018-1.015-0.070-1.501-0.088-0.487-0.187-1.041-0.295-1.663-1.176 1.853-2.771 3.103-4.786 3.752l-0.224 0.486c0.947 0.609 1.84 0.798 2.678 0.569v0zM13.42 13.547c-2.028-0.649-3.631-1.899-4.807-3.752-0.095 0.622-0.189 1.176-0.284 1.663s-0.115 0.986-0.061 1.501c0.027 0.352 0.243 0.642 0.649 0.872 0.306 0.252 1.511 0.723 2.028 0.771 0.838 0.229 1.73 0.040 2.678-0.568l-0.203-0.487zM14.018 17.015c-0.155 0.406-0.125 1.037 0.092 1.578h0.941v-2.978c-0.393 0.528-0.878 0.994-1.033 1.4zM16.053 18.593h0.908c0.054-0.148 0.095-0.438 0.122-0.554s0.041-0.24 0.041-0.375c0-0.365-0.079-0.696-0.235-0.994s-0.564-0.648-0.836-1.055v2.978zM26.568 8.654c0.203 0.798 0.271 1.609 0.203 2.434-0.135 1.65-0.838 3.306-2.109 4.604l1.116 2.13-1.644 1.866c-2.326-1.11-3.063 0.044-3.063 1.663v6.649h-1.047v-5.964h-0.946v5.964h-1.088v-5.964h-0.938v5.964h-1.034v-5.964h-0.938v5.964h-1.033v-5.946l-0.939-0.018v5.964h-1.090v-5.964h-0.943v5.964h-1.035v-6.649c0-1.625-0.867-2.855-3.198-1.663l-1.683-1.866 1.176-2.13c-1.271-1.298-1.951-2.951-2.1-4.613-0.075-0.833-0.014-1.647 0.182-2.445 0.997-4.056 4.496-4.698 5.182-4.807 3.905-0.541 7.818-0.541 11.737 0 0.669 0.115 4.213 0.819 5.232 4.827z"></path>
                                    </svg>
                                    Population
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                </div>
            </Tab.Group>

            {displayTabSelect === 0 &&
                <StatisTable
                    reportSetting={reportSetting}
                    setReportSetting={setReportSetting}
                    detailedTable={detailedTable}
                />
            }

            {
                displayTabSelect === 1 &&
                <HeroRasingSize
                    filter={filter}
                    raiseSizingTable={(type: any, field: any, position: any, actionType: any, stackDepth: any) => raiseSizingTable(type, field, position, actionType, stackDepth)}
                />
            }

            {
                displayTabSelect === 2 &&
                <VillainRasingSize
                    filter={filter}
                    raiseSizingTable={(type: any, field: any, position: any, actionType: any, stackDepth: any) => raiseSizingTable(type, field, position, actionType, stackDepth)}
                />
            }

        </div>
    );
};

export default DetailTable;
