import { useRef, useState, ChangeEvent } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import DefaultAvater from "../../../assets/default.webp";
import utils from "../../../hooks/utils";
import { BsCardImage } from "react-icons/bs";
import Loader from "../../common/Loader";
import { UserType } from "../../../hooks/types";
import useUpdateProfile from "../../../hooks/Account/useUpdateProfile";
import ImageComp from "../../common/Image";
import Button from "../../common/Button";

function UpdateProfileImage({ profile }: { profile: UserType }): JSX.Element {
    const { dataURLtoBlob } = utils();

    const profile_image = profile?.image || DefaultAvater;
    const [image, setImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [dataUrl, setDataUrl] = useState<string | null>(null);
    const minWidth = 150;
    const cropperRef = useRef<ReactCropperElement>(null);

    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        setDataUrl(cropper?.getCroppedCanvas()?.toDataURL() || null);
    };

    const { updateImage, updatingImage, isSuccess } = useUpdateProfile(
        profile.username
    );

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.addEventListener("load", () => {
            const imgElement = new Image();

            const imgUrl = fileReader.result?.toString() || "";
            imgElement.src = imgUrl;

            imgElement.addEventListener("load", (e) => {
                const { naturalHeight, naturalWidth } =
                    e.currentTarget as HTMLImageElement;
                if (naturalHeight < minWidth || naturalWidth < minWidth) {
                    setError("Image must be at least 150x150 pixels.");
                    setImage(null);
                    return;
                } else {
                    setError(null);
                    setImage(imgUrl);
                }
            });
        });

        fileReader.readAsDataURL(file);
    };

    const handleCancel = () => {
        setDataUrl(null);
        setImage(null);
    };

    const handleSave = async () => {
        if (dataUrl) {
            const blob = await dataURLtoBlob(dataUrl);
            await updateImage(blob);
            setImage(null);
            setDataUrl(null);
        }
    };

    return (
        <>
            <section className="w-full">
                {image && !isSuccess ? (
                    <>
                        <Cropper
                            src={image}
                            style={{ height: 300, width: "100%" }}
                            initialAspectRatio={1}
                            guides={true}
                            crop={onCrop}
                            aspectRatio={1}
                            cropBoxResizable={false}
                            minContainerHeight={150}
                            minContainerWidth={150}
                            minCropBoxWidth={150}
                            minCropBoxHeight={150}
                            className="w-full"
                            ref={cropperRef}
                        />
                        <div className="my-2 px-4 flex items-center gap-x-5 justify-between">
                            <Button onClick={handleSave} disabled={updatingImage} className="bg-green-600 py-2 rounded" label="Save" />
                            <Button onClick={handleCancel} disabled={updatingImage} className="py-2 px-5 bg-white rounded" label="Cancel"/>
                            
                        </div>
                    </>
                ) : (
                    <div className="relative">
                        {updatingImage && (
                            <div className="p-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded text-white bg-primary-800/90 z-50 text-center">
                                <p>Updating...</p>
                                <Loader />
                            </div>
                        )}
                        <div className="h-92 p-4 flex items-center justify-center">
                            <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-full">
                                <ImageComp
                                    src={profile_image}
                                    className="w-full h-full"
                                    alt="User"
                                    hash={profile.profile_image_hash}
                                />
                                <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center">
                                    <span className="dark:bg-gray-800/55 bg-gray-100/55 w-full h-full rounded-full p-2 flex items-center justify-center">
                                        <label
                                            htmlFor="profile_image"
                                            className="cursor-pointer"
                                        >
                                            <BsCardImage className="w-8 h-8 text-white" />
                                        </label>
                                        <input
                                            type="file"
                                            id="profile_image"
                                            className="hidden"
                                            onChange={(e) => handleUpload(e)}
                                            accept="image/png, image/jpeg, image/jpg, image/webp"
                                            hidden
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {error && (
                            <p className="text-red-500 text-center">{error}</p>
                        )}
                    </div>
                )}
            </section>
        </>
    );
}

export default UpdateProfileImage;
