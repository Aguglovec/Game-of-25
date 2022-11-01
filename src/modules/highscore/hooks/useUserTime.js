import { useSelector } from 'react-redux';
import { endTimeSelector, startTimeSelector } from '../../../store/selectors/selectors';

function useUserTime() {
    return useSelector(endTimeSelector) - useSelector(startTimeSelector);
}

export default useUserTime