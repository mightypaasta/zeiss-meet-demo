/**
 * Copyright (c) 2020 Carl Zeiss Meditec AG All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * This is the mode to represent the user inforamtion
 */
export default interface UserData {
  userId?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  email: string;
  password: string;
}
