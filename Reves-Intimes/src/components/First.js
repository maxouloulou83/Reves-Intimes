import React from 'react'
import Typewriter from "typewriter-effect";


export default function First() {
    return (



                <div className="relative bg-gradient-to-r from-red-400 to-blue-600">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 " />
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://limg.app/i/jNXpXf.png"
                                    alt="femme avec lingerie CLASS"
                                />
                                <div className=" inset-0 bg-gradient-to-r mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">
                                         <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">

                                        <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                                            <div>
                                                <div className="flex justify-center">
                                                    {/*<img*/}
                                                    {/*    className="hidden lg:block h-32 w-32"*/}
                                                    {/*    src="https://limg.app/i/jdRaVt.png"*/}
                                                    {/*    alt="Logo"*/}
                                                    {/*/>*/}
                                                </div>
                                                <div className="App">
                                                    <Typewriter

                                                        onInit={(typewriter)=> {

                                                            typewriter

                                                                .typeString("Rêves Intimes")

                                                                .pauseFor(2000)
                                                                .deleteAll()
                                                                .typeString(" Rêves Intimes.")
                                                                .start();
                                                        }}
                                                    />
                                                </div>
                                            </div>


                                        </h2>
                                    </p>
                                    </span>
                                    <span className="block text-white text-2xl subpixel-antialiased">
                                        un  concept  store  consacré  à  la  sensualité  et  à  la  séduction.
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


    )
}
