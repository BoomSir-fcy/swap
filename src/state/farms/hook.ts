import { useEffect } from "react"
import { useAppDispatch } from "state"
import { fetchAdditionalRatesAsync } from "."


export const useFetchAdditionalRates = () => {
    const dispatch = useAppDispatch()
  
    useEffect(() => {
      dispatch(fetchAdditionalRatesAsync())
    }, [dispatch])
  }