export enum QueryKeys {
	AddToQueue = 'ADD_TO_QUEUE',
	AlbumTracks = 'ALBUM_TRACKS',
	Api = 'API',
	ArtistAlbums = 'ARTIST_ALBUMS',
	ArtistById = 'ARTIST_BY_ID',
	Credentials = 'CREDENTIALS',
	ItemImage = 'IMAGE_BY_ITEM_ID',
	Libraries = 'LIBRARIES',
	Pause = 'PAUSE',
	Play = 'PLAY',
	Playlists = 'PLAYLISTS',
	Progress = 'PROGRESS',
	PlayQueue = 'PLAY_QUEUE',
	PublicApi = 'PUBLIC_API',
	PublicSystemInfo = 'PUBLIC_SYSTEM_INFO',
	RemoveFromQueue = 'REMOVE_FROM_QUEUE',
	RemoveMultipleFromQueue = 'REMOVE_MULTIPLE_FROM_QUEUE',
	ReportPlaybackPosition = 'REPORT_PLAYBACK_POSITION',
	ReportPlaybackStarted = 'REPORT_PLAYBACK_STARTED',
	ReportPlaybackStopped = 'REPORT_PLAYBACK_STOPPED',
	ServerUrl = 'SERVER_URL',
	Playlist = 'Playlist',
	RecentlyPlayed = 'RecentlyPlayed',
	RecentlyPlayedArtists = 'RecentlyPlayedArtists',
	ArtistFeaturedAlbums = 'ArtistFeaturedAlbums',
	ArtistImage = 'ArtistImage',
	PlaybackStateChange = 'PlaybackStateChange',
	Player = 'Player',

	/**
	 * Query representing the fetching of a user's created playlist.
	 *
	 * This differs from "Favorite Playlists", which are playlists
	 * that exist on the server not created by the user that the user
	 * has favorited
	 *
	 * Invalidation occurs by providing this query key
	 */
	UserPlaylists = 'UserPlaylists',

	/**
	 * Query representing the fetching of tracks for an album or playlist.
	 *
	 * Invalidation occurs when the ID of the album or playlist is provided
	 * as a query key
	 */
	ItemTracks = 'ItemTracks',
	RefreshHome = 'RefreshHome',
	FavoriteArtists = 'FavoriteArtists',
	FavoriteAlbums = 'FavoriteAlbums',
	FavoriteTracks = 'FavoriteTracks',
	UserData = 'UserData',
	UpdatePlayerOptions = 'UpdatePlayerOptions',
	Item = 'Item',
	Search = 'Search',
	SearchSuggestions = 'SearchSuggestions',
	FavoritePlaylists = 'FavoritePlaylists',
	UserViews = 'UserViews',
	Audio = 'Audio',
	RecentlyAdded = 'RecentlyAdded',
	SimilarItems = 'SimilarItems',
}
