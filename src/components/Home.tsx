import React from 'react'
import react from '../images/React.png'
import git from '../images/Git.png'
import tailwind from '../images/Tailwind.png'
import linkedin from '../images/Linkedin.png'
import gmail from '../images/Gmail.jpg'
import github from '../images/GitHub.png'

const Home = () => {
  return (
    <div className="w-full" style={{height:"88vh", clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)"}}>
      <div className="flex shadow-lg" style={{height:"100%"}}>
        <div className="flex items-center text-center px-8 md:text-left sm:px-12 md:w-1/2 lg:text-left md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-semibold text-gray-200 sm:text-4xl">I Make <span className="text-indigo-600">Websites</span></h2>
                <p className="mt-6 text-sm text-gray-400 sm:text-base">Find me on:</p>
                <div className="flex justify-center md:justify-start lg:justify-start mt-2">
                    <a className="p-1 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="https://www.linkedin.com/in/bishow712/" target='_blank'><img src={`${linkedin}`} className="w-6 h-6" alt="Linkedin" /></a>
                    <a className="mx-4 p-1 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="https://github.com/bishow712" target='_blank'><img src={`${github}`} className="w-6 h-6" alt="Github" /></a>
                    <a className="p-1 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="https://mail.google.com/mail/?view=cm&fs=1&to=bishow712@gmail.com" target='_blank'><img src={`${gmail}`} className="w-6 h-6" alt="Github" /></a>
                </div>
            </div>
        </div>
        <div className="hidden md:block md:w-1/2 lg:block lg:w-1/2">
            <div className="h-full bg-no-repeat bg-cover">
            <div className="window">
                <div className="scene">
                    <ul className="grid">
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="item__text">Bishow</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="item__text">Creative</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="item__text">Performant</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                <img src={`${tailwind}`} className="w-6 h-6" alt="Tailwind" /> 
                                </div>
                                <div className="item__text">Tailwind</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                  <img src={`${react}`} className="w-6 h-6" alt="React" />                                 
                                </div>
                                <div className="item__text">React</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="item__text">CSS!</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="item__text">Responsive</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    
                                </div>
                                <div className="item__text">Profit</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    
                                </div>
                                <div className="item__text">Like</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="item__text">Hover</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                  <img src={`${git}`} className="w-6 h-6" alt="React" />                                
                                    
                                </div>
                                <div className="item__text">Git</div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="item__icon">
                                    
                                </div>
                                <div className="item__text">Configurable</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
