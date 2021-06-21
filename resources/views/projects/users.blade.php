@extends ('layouts.app')

@section('content')
    <script>
    $(document).ready( function () {
        $('#table_id').DataTable();
    } );
    </script>
    <table id="table_id" class="display">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Projects</th>
            </tr>
        </thead>
        <tbody>
        @forelse ($users as $user)
            <tr>
                <td>{{ $user->id }}</td>
                <td>{{ $user->name }}</td>
                <td>{{ count($user->projects) }}</td>
            </tr>
        @empty
            <tr><td colspan="3">No users yet.</td></tr>
        @endforelse
        </tbody>
    </table>
@endsection