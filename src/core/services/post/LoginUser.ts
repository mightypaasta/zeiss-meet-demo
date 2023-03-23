/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { env } from '../../../config/AppConfig';
/* istanbul ignore next */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* istanbul ignore file */
/**
 * Copyright (c) 2020 Carl Zeiss Meditec AG All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

const Login = async (userdata: any, emailId: string, password: string) => {
    const url = `${env.loginEndpoint + emailId}/images/${password}/comments`;
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: userdata,
    });
    return response;
};
export { Login };
