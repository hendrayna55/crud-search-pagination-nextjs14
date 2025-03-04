import { getContact } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/button";

const ContactTable = async ({query, currentPage}: {query: string, currentPage: number}) => {
    const contacts = await getContact(query, currentPage);
  return (
    <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-sm text-gray-700 uppercase bg-gray-50'>
            <tr>
                <th className='py-3 px-6'>#</th>
                <th className='py-3 px-6'>Name</th>
                <th className='py-3 px-6'>Phone Number</th>
                <th className='py-3 px-6'>Created At</th>
                <th className='py-3 px-6 text-center'>Action</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((item, index) => (
                <tr key={item.id} className="bg-white border-b">
                    <td className='py-3 px-6'>{index + 1}</td>
                    <td className='py-3 px-6'>{item.name}</td>
                    <td className='py-3 px-6'>{item.phone_number}</td>
                    <td className='py-3 px-6'>{formatDate(item.createdAt.toString())}</td>
                    <td className="flex justify-center gap-2 py-3">
                        <EditButton id={item.id}/>
                        <DeleteButton id={item.id}/>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ContactTable