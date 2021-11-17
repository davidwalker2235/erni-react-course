export default {
    get: jest.fn().mockResolvedValue({
        data: [
            {
                id: 1,
                name: 'Mock name'
            }
        ]
    })
}