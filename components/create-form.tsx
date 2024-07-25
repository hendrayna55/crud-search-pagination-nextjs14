'use client';

import { saveContact } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";

const CreateForm = () => {
    const [state, formAction] = useFormState(saveContact, null);
  return (
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full Name</label>
                <input type="text" name="name" id="name" placeholder="Full Name..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                </div>
            </div>

            <div className="mb-5">
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-900">Phone Number</label>
                <input type="text" name="phone_number" id="phone_number" placeholder="Phone Number..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.phone_number}</p>
                </div>
            </div>

            <div id="message-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{state?.message}</p>
            </div>

            <SubmitButton label="save" />
        </form>
    </div>
  )
}

export default CreateForm