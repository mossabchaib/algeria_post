import { XMarkIcon } from '@heroicons/react/24/outline';
import LoadingDots from '../../components/loading-dots';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';
import { removeItem } from '../../components/cart/actions';
import type { CartItem } from '../../lib/shopify/types';
import { useTransition } from 'react';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import { remove } from '@/Golobal-Redux/buySlice/buy';
export default function DeleteItemButton(product:any) {
  const dispatch = useAppDispatch();
  const removeItem = (productId: string) => {
console.log('id:',productId)
    dispatch(remove(productId));
  };
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Remove cart item"
   
      disabled={isPending}
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200',
        {
          'cursor-not-allowed px-0': isPending
        }
      )}
      onClick={() => removeItem(product.id)}
    >
      {isPending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
      )}
    </button>
  );
}
