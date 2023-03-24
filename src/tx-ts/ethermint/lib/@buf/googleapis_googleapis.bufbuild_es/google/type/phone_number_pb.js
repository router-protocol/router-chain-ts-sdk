// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.0.0
// @generated from file google/type/phone_number.proto (package google.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * An object representing a phone number, suitable as an API wire format.
 *
 * This representation:
 *
 *  - should not be used for locale-specific formatting of a phone number, such
 *    as "+1 (650) 253-0000 ext. 123"
 *
 *  - is not designed for efficient storage
 *  - may not be suitable for dialing - specialized libraries (see references)
 *    should be used to parse the number for that purpose
 *
 * To do something meaningful with this number, such as format it for various
 * use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first.
 *
 * For instance, in Java this would be:
 *
 *    com.google.type.PhoneNumber wireProto =
 *        com.google.type.PhoneNumber.newBuilder().build();
 *    com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber =
 *        PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ");
 *    if (!wireProto.getExtension().isEmpty()) {
 *      phoneNumber.setExtension(wireProto.getExtension());
 *    }
 *
 *  Reference(s):
 *   - https://github.com/google/libphonenumber
 *
 * @generated from message google.type.PhoneNumber
 */
export const PhoneNumber = proto3.makeMessageType(
  "google.type.PhoneNumber",
  () => [
    { no: 1, name: "e164_number", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
    { no: 2, name: "short_code", kind: "message", T: PhoneNumber_ShortCode, oneof: "kind" },
    { no: 3, name: "extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * An object representing a short code, which is a phone number that is
 * typically much shorter than regular phone numbers and can be used to
 * address messages in MMS and SMS systems, as well as for abbreviated dialing
 * (e.g. "Text 611 to see how many minutes you have remaining on your plan.").
 *
 * Short codes are restricted to a region and are not internationally
 * dialable, which means the same short code can exist in different regions,
 * with different usage and pricing, even if those regions share the same
 * country calling code (e.g. US and CA).
 *
 * @generated from message google.type.PhoneNumber.ShortCode
 */
export const PhoneNumber_ShortCode = proto3.makeMessageType(
  "google.type.PhoneNumber.ShortCode",
  () => [
    { no: 1, name: "region_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "PhoneNumber_ShortCode"},
);

