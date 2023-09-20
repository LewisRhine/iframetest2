const cookie = document.cookie

document.getElementById('cookieLine').textContent = cookie
// console.log('test log')
// window.addEventListener(
//     "message",
//     (event) => {
//         document.getElementById('cookieLine').textContent = event.data
//     },
//     false,
// );

// window.postMessage('this is a test')


var myHeaders = new Headers()
myHeaders.append('x-api-key', 'e91a88fc-cf51-43c9-8937-8fd1ff9cd112')
myHeaders.append('Content-Type', 'application/json')

var raw = JSON.stringify({
    patient: {
        firstName: 'first',
        lastName: 'last',
        email: 'first.last@foo.bar.baz',
        phone: '206-789-0123',
        gender: 'male',
        dateOfBirth: '1958-06-07',
        address: {
            line1: '2324 Eastlake Ave',
            city: 'Seattle',
            state: 'WA',
            postalCode: '98102',
        },
    },
    billingInfo: {
        paymentMethod: 'insurance',
        declaration: 'self',
        insuranceType: 'manual',
        insuranceProviderId: 'providerId12345',
        insuranceMemberId: 'memberId54321',
    },
    visitDetails: {
        visitTypeName: 'virtual',
        acceptedTerms: true,
        declaration: 'self',
        stateLicensure: 'WA',
        visitReason: 'covid',
        brand: 'providence',
        userType: 'guest',
    },
})

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    mode: 'no-cors',
}

fetch(
    'https://api.urmc-uat.dex.care/v1/booking/queued-guest-visit?product=Other',
    requestOptions,
)
    .then((response) => response.json())
    .then((result) => {
        window.location.href = result.visitRedirecturl
    })
    .catch((error) => console.log('error', error))
