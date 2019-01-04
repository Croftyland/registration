import React from "react";
import avatar from "../../Photos/avatar.png";
import { inject, observer } from "mobx-react";

@inject(({ userStore }) => ({
    onChangeAvatar: userStore.onChangeAvatar,
    img: userStore.values.avatar,
    error: userStore.errors.avatar
}))
@observer
export default class AvatarInfo extends React.Component {
    render() {
        const { onChangeAvatar, img, error } = this.props;
        return (
            <div className="avatar">
                <img alt="avatar" src={img ? img : avatar} title="avatar" />
                <div className="mt-4 mb-4">
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                            onChange={onChangeAvatar}
                        />
                        <label className="custom-file-label" htmlFor="customFile">
                            Choose avatar
                        </label>
                        {error ? <div className="invalid-feedback">{error}</div> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default AvatarInfo;