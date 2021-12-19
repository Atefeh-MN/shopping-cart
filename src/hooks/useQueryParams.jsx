
import { useSearchParams } from 'react-router-dom';
export function useQueryParam()
 {
 return(new URLSearchParams(useSearchParams()) )
}
