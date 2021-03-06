/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * Accelerated Mobile Pages (AMP) URL API
 *
 * Retrieves the list of AMP URL (and equivalent AMP Cache URL) for a given list of public URL(s).

 *
 * @example
 * const google = require('googleapis');
 * const acceleratedmobilepageurl = google.acceleratedmobilepageurl('v1');
 *
 * @namespace acceleratedmobilepageurl
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Acceleratedmobilepageurl
 */
function Acceleratedmobilepageurl(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.ampUrls = {

    /**
     * acceleratedmobilepageurl.ampUrls.batchGet
     *
     * @desc Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
     *
     * @alias acceleratedmobilepageurl.ampUrls.batchGet
     * @memberOf! acceleratedmobilepageurl(v1)
     *
     * @param {object} params Parameters for request
     * @param {acceleratedmobilepageurl(v1).BatchGetAmpUrlsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://acceleratedmobilepageurl.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/ampUrls:batchGet').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef BatchGetAmpUrlsResponse
 * @memberOf! acceleratedmobilepageurl(v1)
 * @type object
* @property {acceleratedmobilepageurl(v1).AmpUrl[]} ampUrls For each URL in BatchAmpUrlsRequest, the URL response. The response might
not be in the same order as URLs in the batch request.
If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated
only once.
* @property {acceleratedmobilepageurl(v1).AmpUrlError[]} urlErrors The errors for requested URLs that have no AMP URL.
*/
/**
 * @typedef AmpUrl
 * @memberOf! acceleratedmobilepageurl(v1)
 * @type object
* @property {string} cdnAmpUrl The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
the cached document in the Google AMP Cache.
* @property {string} originalUrl The original non-AMP URL.
* @property {string} ampUrl The AMP URL pointing to the publisher&#39;s web server.
*/
/**
 * @typedef AmpUrlError
 * @memberOf! acceleratedmobilepageurl(v1)
 * @type object
 * @property {string} errorMessage An optional descriptive error message.
 * @property {string} errorCode The error code of an API call.
 * @property {string} originalUrl The original non-AMP URL.
 */
/**
 * @typedef BatchGetAmpUrlsRequest
 * @memberOf! acceleratedmobilepageurl(v1)
 * @type object
* @property {string} lookupStrategy The lookup_strategy being requested.
* @property {string[]} urls List of URLs to look up for the paired AMP URLs.
The URLs are case-sensitive. Up to 50 URLs per lookup
(see [Usage Limits](/amp/cache/reference/limits)).
*/
export = Acceleratedmobilepageurl;
