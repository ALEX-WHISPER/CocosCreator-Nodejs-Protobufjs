/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Test = (function() {

    /**
     * Namespace Test.
     * @exports Test
     * @namespace
     */
    var Test = {};

    Test.userInfo = (function() {

        /**
         * Properties of a userInfo.
         * @memberof Test
         * @interface IuserInfo
         * @property {number} userID userInfo userID
         * @property {string} userName userInfo userName
         * @property {string|null} [userEmail] userInfo userEmail
         */

        /**
         * Constructs a new userInfo.
         * @memberof Test
         * @classdesc Represents a userInfo.
         * @implements IuserInfo
         * @constructor
         * @param {Test.IuserInfo=} [properties] Properties to set
         */
        function userInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * userInfo userID.
         * @member {number} userID
         * @memberof Test.userInfo
         * @instance
         */
        userInfo.prototype.userID = 0;

        /**
         * userInfo userName.
         * @member {string} userName
         * @memberof Test.userInfo
         * @instance
         */
        userInfo.prototype.userName = "";

        /**
         * userInfo userEmail.
         * @member {string} userEmail
         * @memberof Test.userInfo
         * @instance
         */
        userInfo.prototype.userEmail = "";

        /**
         * Creates a new userInfo instance using the specified properties.
         * @function create
         * @memberof Test.userInfo
         * @static
         * @param {Test.IuserInfo=} [properties] Properties to set
         * @returns {Test.userInfo} userInfo instance
         */
        userInfo.create = function create(properties) {
            return new userInfo(properties);
        };

        /**
         * Encodes the specified userInfo message. Does not implicitly {@link Test.userInfo.verify|verify} messages.
         * @function encode
         * @memberof Test.userInfo
         * @static
         * @param {Test.IuserInfo} message userInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.userID);
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            if (message.userEmail != null && message.hasOwnProperty("userEmail"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userEmail);
            return writer;
        };

        /**
         * Encodes the specified userInfo message, length delimited. Does not implicitly {@link Test.userInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Test.userInfo
         * @static
         * @param {Test.IuserInfo} message userInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a userInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Test.userInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Test.userInfo} userInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test.userInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.userID = reader.int32();
                    break;
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.userEmail = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userID"))
                throw $util.ProtocolError("missing required 'userID'", { instance: message });
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            return message;
        };

        /**
         * Decodes a userInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Test.userInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Test.userInfo} userInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a userInfo message.
         * @function verify
         * @memberof Test.userInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        userInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userID))
                return "userID: integer expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (message.userEmail != null && message.hasOwnProperty("userEmail"))
                if (!$util.isString(message.userEmail))
                    return "userEmail: string expected";
            return null;
        };

        /**
         * Creates a userInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Test.userInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Test.userInfo} userInfo
         */
        userInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Test.userInfo)
                return object;
            var message = new $root.Test.userInfo();
            if (object.userID != null)
                message.userID = object.userID | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userEmail != null)
                message.userEmail = String(object.userEmail);
            return message;
        };

        /**
         * Creates a plain object from a userInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Test.userInfo
         * @static
         * @param {Test.userInfo} message userInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        userInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userID = 0;
                object.userName = "";
                object.userEmail = "";
            }
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userEmail != null && message.hasOwnProperty("userEmail"))
                object.userEmail = message.userEmail;
            return object;
        };

        /**
         * Converts this userInfo to JSON.
         * @function toJSON
         * @memberof Test.userInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        userInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return userInfo;
    })();

    return Test;
})();

module.exports = $root;
