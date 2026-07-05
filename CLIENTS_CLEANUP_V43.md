# V43 Clients Cleanup

## Scope
Runtime cleanup for client module only.

## Final runtime owner
`assets/js/19-v43-clients-cleanup.js`

It owns:
- `renderClients`
- `openClientDetail`
- `openClientForm`
- `saveClient`
- `deleteClient`
- client filter/sort bar

## Safety
Older files still exist for rollback and dependency safety, but V43 is loaded last and becomes the single runtime source for the client module. This avoids risky deletion in the first cleanup pass.

## Next cleanup step
V44 can consolidate files by moving stable client code into `clients.js` and disabling/removing old client patches after testing V43.
