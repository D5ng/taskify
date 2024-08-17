import Image from "next/image"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import { Loading } from "@common/components/ui"
import { useFormControlContext } from "../form-control"
import type { FormControlUploadProps } from "../form-control"
import classes from "../form-control.module.css"

export default function Upload(props: FormControlUploadProps) {
  const formControlContext = useFormControlContext()
  const imageWrapperClassName = `${classes["upload-icon"]} ${props.previewImageUrl && classes["upload-preview"]}`
  return (
    <>
      <label htmlFor={formControlContext.id} className={classes["upload-label"]}>
        <div className={imageWrapperClassName}>
          {props.isLoading ? (
            <Loading />
          ) : (
            <Image src={props.previewImageUrl || AddVioletIcon} alt="" fill priority sizes="width: 100%" />
          )}
        </div>
      </label>
      {props.children}
    </>
  )
}
