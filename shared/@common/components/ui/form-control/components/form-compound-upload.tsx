import { PropsWithChildren } from "react"
import Image from "next/image"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import { Loading } from "@common/components/ui/loading"
import { useFormControlContext } from "@common/components/ui/form-control"
import classes from "../index.module.css"

export default function Upload(props: PropsWithChildren<{ isLoading: boolean }>) {
  const formControlContext = useFormControlContext()
  const imageWrapperClassName = `${classes["upload-icon"]} ${
    formControlContext.previewImageUrl && classes["upload-preview"]
  }`
  return (
    <>
      <label htmlFor={formControlContext.id} className={classes["upload-label"]}>
        <div className={imageWrapperClassName}>
          {props.isLoading ? (
            <Loading />
          ) : (
            <Image src={formControlContext.previewImageUrl || AddVioletIcon} alt="" fill priority sizes="width: 100%" />
          )}
        </div>
      </label>
      {props.children}
    </>
  )
}
