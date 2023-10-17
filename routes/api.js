var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	res.setHeader('Set-Cookie',
		"dexcareSession=eyJ1dWlkIjoiY2NiZGIwNjAtNTY1MC0xMWVlLTg2N2YtNTNlYjc0M2EwNjM1IiwiYXV0aDBTZXNzaW9uIjp7InN0YXRlIjoiY2NiZGIwNjAtNTY1MC0xMWVlLTg2N2YtNTNlYjc0M2EwNjM1In0sImF1dGhPbiI6dHJ1ZSwiZmxvd1R5cGUiOiJ2aXJ0dWFsIiwidGltZU9mQXV0aFN0YXJ0IjoxNjk1NzUzNDc5MzE4LCJyZXR1cm5UbyI6Ii92aXJ0dWFsL3NlbGVjdC1kZW1vZ3JhcGhpY3M/YXV0aE9uPXRydWUmYnJhbmQ9dXJtYyZsb2NhdGlvblN0YXRlPU5ZJnJlZmVycmVyPWh0dHBzJTNBJTJGJTJGc2NoZWR1bGluZy51cm1jLXVhdC5kZXguY2FyZSUyRnZpcnR1YWwlMkZwcmVjaGVjayUyRmF2YWlsYWJpbGl0eSUzRmF1dGhPbiUzRHRydWUlMjZicmFuZCUzRHVybWMiLCJwYXNzcG9ydCI6eyJ1c2VyIjp7InRpbWVPZkF1dGgiOjE2OTU3NTM0ODY2MDIsImV4cGlyYXRpb24iOjE2OTU3NTUzNTAyNDksImV4cGlyYXRpb25DbGllbnRUaW1lb3V0IjoxODAwMDAwLCJleHBpcmF0aW9uV2FybmluZ0NsaWVudFRpbWVvdXQiOjE1MDAwMDAsImp3dCI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNJc0ltdHBaQ0k2SWpCdE9YRlBZek5WWVhKMmVXRXpabGxJVlVwb05pSjkuZXlKb2RIUndjem92TDJSbGVDNWpZWEpsTDJselJXMXlRWFYwYUNJNlptRnNjMlVzSW01cFkydHVZVzFsSWpvaVpHNW5kWGxsYmlJc0ltNWhiV1VpT2lKa2JtZDFlV1Z1UUdocFoya3VZMjl0SWl3aWNHbGpkSFZ5WlNJNkltaDBkSEJ6T2k4dmN5NW5jbUYyWVhSaGNpNWpiMjB2WVhaaGRHRnlMMlJpWmpBeU1UWXdZMk5rWVRJeVpqYzROMkV6TXpsaU5EWXpORFF3T0dWalAzTTlORGd3Sm5JOWNHY21aRDFvZEhSd2N5VXpRU1V5UmlVeVJtTmtiaTVoZFhSb01DNWpiMjBsTWtaaGRtRjBZWEp6SlRKR1pHNHVjRzVuSWl3aWRYQmtZWFJsWkY5aGRDSTZJakl3TWpNdE1Ea3RNalpVTVRnNk16ZzZNRFV1T0RnNVdpSXNJbVZ0WVdsc0lqb2laRzVuZFhsbGJrQm9hV2RwTG1OdmJTSXNJbVZ0WVdsc1gzWmxjbWxtYVdWa0lqcG1ZV3h6WlN3aWFYTnpJam9pYUhSMGNITTZMeTkxWVhRdGRYSnRZeTUxY3k1aGRYUm9NQzVqYjIwdklpd2lZWFZrSWpvaWEwNXNPVTQxT1ROUVVVOHdaVVI2YkRSM2JHUkpZM040Ym1OalVEazFSM2NpTENKcFlYUWlPakUyT1RVM05UTTBPRFlzSW1WNGNDSTZNVFk1TlRjMk5ESTROaXdpYzNWaUlqb2lZWFYwYURCOE5qTmxaV0UxT0dFMU1qWTFZbVJsTkdFM1lqSXhaR1JrSWl3aVlYVjBhRjkwYVcxbElqb3hOamsxTnpVek5EZzFMQ0p6YVdRaU9pSnJTSE4xY1RWNExYRXdkMFZ3UnpoTWRGZG9jWFExVjNCR2NESkJhRE5pWkNKOS5DSHp2VG9BRFRxREZQT2M3MnM0NFNhdjREcm9SbjRKNU5EX0JaYWJXbGhxazc3Ni11a0VFc2Q3Umx2a21TOEhURk10bkJGcnFyS092MmMyMmpBTjA2VVkxQUZ0X1h1eXIwMExBc1k3YjRmQ3Fpbzg4N3JMRzJOZkxCODctMmZVdE9CNlc1SHE2TGVWX2d4ZGZ0Qk82WklxQV9ZbmxWN1hRTldvMUxwQlZ2QVZOZlZTam9Yd1BQelMwQ3VzcGJoeGZEV09IbXNueElLUFZPZmZPWGh1ZGgyNm02MS1tY1NXWHJ3TXRqWWZVUjQzbkFubFp2R1NRbWxvNGhNVUNMY2lpVlFLeW9IOWFBVmNjUmxodzZROF8yejBXN1hrZUJGSnVSWnM0TDZnX0dwQ3dfYTh0bHVMbGxia1ljY3BZalFyZUJCMXBiM0MwZVpTSnkzVTR1bmx6U0EiLCJlbWFpbCI6ImRuZ3V5ZW5AaGlnaS5jb20iLCJpZCI6ImF1dGgwfDYzZWVhNThhNTI2NWJkZTRhN2IyMWRkZCIsInJvbGVzIjpbXSwiaXNBbm9ueW1vdXNVc2VyIjpmYWxzZSwiZGlzcGxheU5hbWUiOiJQYXRpZW50IiwiaXNFbXJBdXRoIjpmYWxzZX19LCJndWVzdCI6ZmFsc2UsImZha2UiOjI4MjYyNTU5fQ==; path=/; domain=.superbuddytime.com; Partitioned; samesite=none; secure; httponly")
	res.setHeader('Content-Security-Policy', 'frame-ancestors self file://*;')
	res.json({visitRedirecturl:"https://iframetest-dev.superbuddytime.com"});
});

module.exports = router;
