import { FC } from 'react';
import { SidebarLayout } from 'layouts/SidebarLayout';
import { ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const Contacts: FC = () => (
  <SidebarLayout>
    <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Поддержка Algoritm 23</h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">23 / 7</p>
      </div>
      
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        {/* Блок контактов */}
        <div className="flex gap-x-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gray-700">
            <ComputerDesktopIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-white">Контакты</h3>
            <p className="mt-2 leading-7 text-gray-400">
              ООО «АЛГОРИТМ 23» <br />
              117042, г. Москва, Чечёрский проезд, д. 120, помещ.1/1 <br /> 
              ИНН/КПП 9727047992/772701001 <br />
              ОГРН 1237700639010<br />
              +7 (495) 414-23-53<br />
              +7 (985) 355-93-69<br />
              help@algoritm23.net
            </p>
          </div>
        </div>

        {/* Блок отзывов */}
        <div className="flex gap-x-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gray-700">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-white">Отзывы</h3>
            <p className="mt-2 leading-7 text-gray-400">
              Посмотреть отзывы можно по ссылке ниже.
            </p>
            <p className="mt-4">
              <a 
                href="https://cloud.mail.ru/public/BYNQ/nnnSUzjBx" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-red-600"
              >
                Читать отзыв<span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
);

export default Contacts;