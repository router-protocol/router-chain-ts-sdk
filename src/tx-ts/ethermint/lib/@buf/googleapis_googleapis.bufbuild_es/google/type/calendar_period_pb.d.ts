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
// @generated from file google/type/calendar_period.proto (package google.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * A `CalendarPeriod` represents the abstract concept of a time period that has
 * a canonical start. Grammatically, "the start of the current
 * `CalendarPeriod`." All calendar times begin at midnight UTC.
 *
 * @generated from enum google.type.CalendarPeriod
 */
export declare enum CalendarPeriod {
  /**
   * Undefined period, raises an error.
   *
   * @generated from enum value: CALENDAR_PERIOD_UNSPECIFIED = 0;
   */
  CALENDAR_PERIOD_UNSPECIFIED = 0,

  /**
   * A day.
   *
   * @generated from enum value: DAY = 1;
   */
  DAY = 1,

  /**
   * A week. Weeks begin on Monday, following
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
   *
   * @generated from enum value: WEEK = 2;
   */
  WEEK = 2,

  /**
   * A fortnight. The first calendar fortnight of the year begins at the start
   * of week 1 according to
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
   *
   * @generated from enum value: FORTNIGHT = 3;
   */
  FORTNIGHT = 3,

  /**
   * A month.
   *
   * @generated from enum value: MONTH = 4;
   */
  MONTH = 4,

  /**
   * A quarter. Quarters start on dates 1-Jan, 1-Apr, 1-Jul, and 1-Oct of each
   * year.
   *
   * @generated from enum value: QUARTER = 5;
   */
  QUARTER = 5,

  /**
   * A half-year. Half-years start on dates 1-Jan and 1-Jul.
   *
   * @generated from enum value: HALF = 6;
   */
  HALF = 6,

  /**
   * A year.
   *
   * @generated from enum value: YEAR = 7;
   */
  YEAR = 7,
}

