import { PhoneList } from "@/models/phone"


interface Props {
    data: PhoneList;
}

const Table = ({ data }: Props): JSX.Element => {
    return (
        <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-0">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Nome
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Ramal
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Setor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data?.map((item, key: number) => (
                      <tr className="bg-gray-100 border-b" key={key}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ key + 1 }</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.employee?.name }
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.numberPhone }
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          { item.employee?.unit?.name }
                        </td>
                      </tr>
                    ))
                 }

                 {
                    data !== null && data.length === 0 && (
                      <tr className="bg-gray-100 border-b">
                        <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nenhum resultado encontrado</td>
                      </tr>
                    )
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Table;