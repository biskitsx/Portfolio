import React from 'react'
import { motion } from 'framer-motion'

function Step() {
    return (
        <motion.ul className="steps text-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
            }}>
            <li className="step step-primary">
                {/* Open the modal using ID.showModal() method */}
                <button className="hover:scale-105 transition-all" onClick={() => window.my_modal_2.showModal()}>
                    <p>
                        School 🚌
                    </p>
                    <p className='font-semibold text-primary-focus'>
                        Satit Kaset
                    </p>
                </button>
                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg text-primary">School (2005-2019)</h3>
                        <p className="py-4">Kasetsart University Laboratory School Center for Educational Research and Development</p>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </li>
            <li className="step step-primary">
                <button className="hover:scale-105 transition-all" onClick={() => window.my_modal_3.showModal()}>
                    <p>
                        University 🎓
                    </p>
                    <p className='font-semibold text-primary-focus'>
                        KU81 (CPE35)
                    </p>
                </button>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg text-primary">University (2020-now)</h3>
                        <p className="py-4">Faculty of Engineering, Computer Engineering major at Kasetsart University</p>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </li>
            <li className="step">
                <p>
                    Work 💪🏻
                </p>
                <p className='font-semibold text-primary-focus'>
                    ...
                </p>
            </li>
        </motion.ul>

    )
}

export default Step